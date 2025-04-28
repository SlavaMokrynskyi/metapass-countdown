import React, { useState, useEffect } from 'react'
import './style.css'

const Timer = () => {
	const [timeLeft, setTimeLeft] = useState({
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0,
	})

	const dropDate = new Date('2025-05-16')

	useEffect(() => {
		const timer = setInterval(() => {
			const now = new Date()
			const distance = dropDate - now

			if (distance <= 0) {
				clearInterval(timer)
				setTimeLeft({
					days: 0,
					hours: 0,
					minutes: 0,
					seconds: 0,
				})
				return
			}

			// Calculate time components
			const days = Math.floor(distance / (1000 * 60 * 60 * 24))
			const hours = Math.floor(
				(distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
			)
			const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
			const seconds = Math.floor((distance % (1000 * 60)) / 1000)

			setTimeLeft({
				days,
				hours,
				minutes,
				seconds,
			})
		}, 1000)

		return () => clearInterval(timer)
	}, [])
	return (
		<div className='timer-container'>
			<img
				className='gradient-mesh-img'
				src='public\GradientMesh_Light.png'
				alt=''
			/>
			<h2>METAPASS</h2>
			<h1>
				<b>COMING SOON</b>
			</h1>
			<div className='timer-values'>
				<span data-label='Days'>{timeLeft.days}</span>
				<span>:</span>
				<span data-label='Hours'>{timeLeft.hours}</span>
				<span>:</span>
				<span data-label='Mins'>{timeLeft.minutes}</span>
				<span>:</span>
				<span data-label='Secs'>{timeLeft.seconds}</span>
			</div>
			<h5>We will be in the game very soon</h5>
			<button
				onClick={() => window.open('https://x.com/7MetaPass7', '_blank')}
				className='twitter-btn'
				title='Our X`s page'
			></button>
		</div>
	)
}

export default Timer
