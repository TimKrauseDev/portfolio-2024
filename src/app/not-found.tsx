import Button from '@/components/ui/button'
import Container from '@/components/ui/container'
import Spacer from '@/components/ui/spacer'

export default function NotFound() {
  return (
    <section>
      <Container>
        <h1>404 - Page not found</h1>
        <p className="lead-lg">Ops, this page does not exist.</p>
        <Spacer height={30} />
        <Button to="/">Home</Button>
        <Spacer height={30} />

      </Container>
    </section>
  )
}
