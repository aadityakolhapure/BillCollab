import { Mail } from "lucide-react"

import { Button } from "@/components/ui/button"

export function ButtonWithIcon() {
  return (
    <Button>
      <a href="/login">
        <Mail /> Login with Email
      </a>
    </Button>
  )
}
