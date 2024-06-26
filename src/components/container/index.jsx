import PropTypes from 'prop-types';

function Container({children}) {
   return (
      <div className="max-w-6xl mx-auto p-4 max-lg:p-6 ">
         {children}
      </div>
   )
}

Container.propTypes = {
   children: PropTypes.any.isRequired
}

export default Container
