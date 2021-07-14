import React from 'react'
import { Container } from 'semantic-ui-react'
import classNames from 'classnames'
import Header from './../../components/Header'

export default function BasicLayout({ className, children }) {
	return (
		<Container
			fluid
			className={classNames('BasicLayout', { [className]: className })}>
			<Header />
			<Container className="content">{children}</Container>
		</Container>
	)
}
