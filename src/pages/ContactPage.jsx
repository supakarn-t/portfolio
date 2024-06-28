export default function ContactPage() {
	return (
		<section>
			<h2 id="contact">Contact</h2>
			<form className="flex flex-col bg-sky-200 w-1/2 p-4 gap-4 rounded-lg">
				<input
					type="text"
					name="contact-name"
					placeholder="Your Name"
					className="input"
				/>
				<input
					type="text"
					name="contact-email"
					placeholder="Your Email"
					className="input"
				/>
				<textarea
					name="contact-message"
					placeholder="Message"
					className="input"
				></textarea>
				<button type="submit" className="btn bg-white w-fit">
					Sent
				</button>
			</form>
		</section>
	);
}
