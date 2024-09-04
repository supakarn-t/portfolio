export default function ContactPage() {
	return (
		<section className="flex flex-col gap-8">
			<h2 id="contact">Contact</h2>
			<form className="flex flex-col bg-sky-200 w-1/2 p-4 gap-4 rounded-lg hover:shadow-lg">
				<input
					type="text"
					name="contact-name"
					placeholder="Your Name"
					className="input hover:shadow-lg"
				/>
				<input
					type="email"
					name="contact-email"
					placeholder="Your Email"
					className="input hover:shadow-lg"
				/>
				<textarea
					name="contact-message"
					placeholder="Message"
					className="input h-40 hover:shadow-lg"
				></textarea>
				<button
					type="submit"
					className="btn bg-white px-6 w-fit hover:shadow-lg"
				>
					Sent
				</button>
			</form>
		</section>
	);
}
