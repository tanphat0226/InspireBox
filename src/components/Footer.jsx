const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <footer className='p-4 bg-white text-sm'>
      <quote className='italic text-gray-400'>
        &quot;The small things you do today can make a big difference tomorrow.&quot;
      </quote>
      <div className='flex justify-between items-center mt-4'>
        <p className='text-gray-600'>&copy; {currentYear} InspireBox. Spread positivity!</p>

        <p>
          Made with ❤️ by{' '}
          <a href='https://github.com/tanphat0226' className='text-emerald-300 underline'>
            Ryan
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
