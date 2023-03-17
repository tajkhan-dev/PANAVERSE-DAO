"use client"
import { ChakraProvider } from "@chakra-ui/react"
import Header from "./(Layouts)/Header"
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body>
        <ChakraProvider>
          <Header />
        {children}</ChakraProvider></body>
    </html>
  )
}
