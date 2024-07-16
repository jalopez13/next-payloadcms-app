import Link from 'next/link'
import { LuFilm } from 'react-icons/lu'
import { Button } from '@/components/ui/button'

const Header = () => {
  return (
    <header className="flex justify-between items-center gap-2 p-5 bg-slate-900 test-white mb-8">
      <div className="flex flex-row items-center gap-4">
        <LuFilm />
        <Link href="/" className="text-xl font-bold">
          <h1>Our Favorite Movies</h1>
        </Link>
      </div>

      <Button variant={'link'}>
        <Link href="/add" className="text-xl font-light">
          Add A Movie
        </Link>
      </Button>
    </header>
  )
}

export default Header
