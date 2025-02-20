import PropTypes from 'prop-types'
import { Link } from 'react-router'

const Button = ({ children, to, variant }) => {
  const variants = {
    primary: 'bg-emerald-500 text-white hover:bg-emerald-300',
    secondary: 'bg-amber-400 text-white hover:bg-amber-300',
    outline: 'border-2 border-emerald-500 text-emerald-500',
    ghost: 'hover:bg-gray-100'
  }

  const variantStyle = variants[variant] || variants.primary
  const className = 'font-bold py-2 px-4 rounded-sm ' + variantStyle

  if (to) {
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    )
  }

  return <Button className={className}>{children}</Button>
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string,
  variant: PropTypes.oneOf(['primary', 'secondary', 'outline', 'ghost'])
}

export default Button
