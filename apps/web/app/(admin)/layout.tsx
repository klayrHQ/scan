import React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head>
        <link rel={"icon"} href={"/images/logo-dark.svg"}/>
        <link rel={"shortcut icon"} href={"/images/logo-dark.svg"}/>
        <link rel={"apple-touch-icon"} href={"/images/logo-dark.svg"}/>
      </head>
      <body>{children}</body>
    </html>
  )
}
