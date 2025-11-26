import { Badge } from "@components/ui/Badge"
import { Button } from "@components/ui/Button"
import { Link } from "@components/ui/Link"
import { Switch } from "@components/ui/Switch"

export const App = () => {
  return (
    <main className="p-4 flex flex-col gap-4 items-start">
      <Button>Click Me</Button>
      <Link href="#">Visit</Link>
      <Switch />
      <Badge>New</Badge>
    </main>
  )
}
