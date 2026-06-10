$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$port = 4328
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$port/")
$listener.Start()
Write-Host "Static server (v5) running at http://localhost:$port/  (root: $root)"
$mime = @{ ".html"="text/html; charset=utf-8"; ".css"="text/css; charset=utf-8"; ".js"="application/javascript; charset=utf-8"; ".json"="application/json"; ".jpg"="image/jpeg"; ".jpeg"="image/jpeg"; ".png"="image/png"; ".svg"="image/svg+xml"; ".ico"="image/x-icon"; ".webp"="image/webp"; ".pdf"="application/pdf" }
while ($listener.IsListening) {
  try {
    $ctx = $listener.GetContext(); $req = $ctx.Request; $res = $ctx.Response
    $rel = [System.Uri]::UnescapeDataString($req.Url.AbsolutePath.TrimStart("/"))
    if ([string]::IsNullOrEmpty($rel)) { $rel = "index.html" }
    $path = Join-Path $root $rel
    if (Test-Path $path -PathType Container) { $path = Join-Path $path "index.html" }
    if (Test-Path $path -PathType Leaf) {
      $ext = [System.IO.Path]::GetExtension($path).ToLower()
      if ($mime.ContainsKey($ext)) { $res.ContentType = $mime[$ext] }
      $bytes = [System.IO.File]::ReadAllBytes($path); $res.ContentLength64 = $bytes.Length
      $res.OutputStream.Write($bytes, 0, $bytes.Length)
    } else { $res.StatusCode = 404; $b=[System.Text.Encoding]::UTF8.GetBytes("404: $rel"); $res.OutputStream.Write($b,0,$b.Length) }
    $res.OutputStream.Close()
  } catch { Write-Host "ERR: $($_.Exception.Message)" }
}
