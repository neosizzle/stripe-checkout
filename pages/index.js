import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { loadStripe } from '@stripe/stripe-js';
import { useEffect } from 'react';

export default function Home() {
	useEffect(() => {
		//check if redirect callback
		const query = new URLSearchParams(window.location.search)

		if (query.get('success'))
			console.log("succcess!!")
		if (query.get('canceled'))
			console.log("cencelled!!")

	}, [])
	
	return (
	<div>
		<form action="/api/checkout_sessions" method='POST'>
			<button>
				checkout
			</button>
		</form>
	
	</div>
	)
}
