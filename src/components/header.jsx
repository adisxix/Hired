import { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { SignIn, UserButton, useAuth, useUser } from '@clerk/react'
import logo from '/hiredlogo.svg'
import { Button } from './ui/button'
import { BriefcaseBusiness, Heart, PenBox } from 'lucide-react'

const Header = () => {
  const [showSignInManually, setShowSignInManually] = useState(false)
  const [search, setSearch] = useSearchParams()
  const { isSignedIn, isLoaded: authLoaded } = useAuth()
  const { user, isLoaded: userLoaded } = useUser()
  const isRecruiter = authLoaded && userLoaded && user?.unsafeMetadata?.role === 'recruiter'
  const showSignIn = showSignInManually || search.get('sign-in')

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      setShowSignInManually(false)
      setSearch({})
    }
  }

  return (
    <>
    <nav className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
      <Link to="/" className="flex items-center gap-3 no-underline shrink-0 self-start">
        <div className="w-11 h-11 border border-blue-500/50 rounded-lg bg-white flex items-center justify-center overflow-hidden shrink-0">
          <img src={logo} alt="Hired Logo" className="w-3/4 h-3/4 object-contain block" />
        </div>
        <span className="text-2xl font-extrabold font-mono text-white tracking-wider sm:text-3xl">Hired</span>
      </Link>

      <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm sm:text-base lg:justify-center">
        <a href="/#companies" className="text-white no-underline font-mono hover:text-blue-500">Companies</a>
        <a href="/#services" className="text-white no-underline font-mono hover:text-blue-500">Services</a>
        <a href="/#community" className="text-white no-underline font-mono hover:text-blue-500">Community</a>
        <a href="/#pricing" className="text-white no-underline font-mono hover:text-blue-500">Pricing</a>
        <a href="/#about" className="text-white no-underline font-mono hover:text-blue-500">About</a>
        <a href="/#get-in-touch" className="text-white no-underline font-mono hover:text-blue-500">Contact</a>
      </div>

      <div className="flex flex-wrap items-center gap-3 self-start lg:self-auto lg:justify-end">
        {!authLoaded ? null : !isSignedIn ? (
          <Button variant="blue" size="lg" className="w-full sm:w-auto" onClick={() => setShowSignInManually(true)}>
            Get Started
          </Button>
        ) : null}
        {isSignedIn && isRecruiter && (
          <Link to="/post-job">
            <Button variant="destructive" size="lg" className="w-full cursor-pointer rounded-full px-5 sm:w-auto">
              <PenBox size={20} className="mr-2" />
              Post a Job
            </Button>
          </Link>
        )}
        {isSignedIn && (
          <UserButton
            appearance={{
              elements: {
                userButtonTrigger: 'w-[50px] h-[50px]',
                userButtonAvatarBox: 'w-[50px] h-[50px]',
              },
            }}>
            <UserButton.MenuItems>
              <UserButton.Link label="My Jobs" labelIcon={<BriefcaseBusiness size={15} />} href="/my-jobs" />
              {!isRecruiter && (
                <UserButton.Link label="Saved Jobs" labelIcon={<Heart size={15} />} href="/saved-jobs" />
              )}
              <UserButton.Action label="manageAccount" />
            </UserButton.MenuItems>
          </UserButton>
        )}
      </div>
    </nav>

      {showSignIn && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/70 px-4 py-8 backdrop-blur-sm" onClick={handleOverlayClick}>
          <div className="w-full max-w-md px-2 sm:px-0">
          <SignIn
            signUpForceRedirectUrl="/onboarding"
            fallbackRedirectUrl="/onboarding"
            appearance={{
              elements: {
                rootBox: 'w-full',
                cardBox: 'w-full overflow-hidden rounded-2xl border border-white/10 shadow-2xl',
                card: 'w-full bg-[#0b1220] text-white',
              },
            }}
          />
          </div>
        </div>
      )}
    </>
  )
}

export default Header
