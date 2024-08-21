import React from 'react'
import PropTypes from 'prop-types'

const FooterText = (props) => (
	<React.Fragment>
		(C) { props.year } All Rights Reserved. This is the &quot;{ props.name }&quot; built with { props.desc }.
		<a
			href="http://www.webkom.co"
			target="_blank"
			rel="noopener noreferrer"
			className="sidebar__link"
		>
		</a>
	</React.Fragment>
)
FooterText.propTypes = {
  year: PropTypes.node,
  name: PropTypes.node,
  desc: PropTypes.node
}
FooterText.defaultProps = {
  year: '2024',
  name: 'Fa Procesos Web',
  desc: 'React'
}

export { FooterText }
