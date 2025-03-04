import '../index.css';
import { TestimonialsProps } from '../types/definitions';
import dots from '../assets/dots.png';

export default function Testimonials(props: TestimonialsProps) {
	const { name, location, icon, children, img, color } = props;

	return (
		<div className={`testimonials bg_dark_${color}`}>
			{color === 'white' ? (
				<img src={dots} alt='background dot texture' className='dots-image' />
			) : null}
			<div className='img_container'>
				{img && (
					<img className='Testimonials_img' src={img} alt='image of a person' />
				)}
			</div>
			<div>
				{!img ? (
					<div>
						{icon}
						<h3>
							Work<span className={`bg_${color}`}>cation</span>
						</h3>
					</div>
				) : null}
					<p style={img ? { textAlign: 'start' } : {}}>{children}</p>
				{img ? (
					<h5 className='img_style_text'>
						{name}, <span>{location}</span>
					</h5>
				) : (
					<h5>
						{name}
						<span className='word_sep'> / </span>
						<span className={`bg_${color}`}>{location}</span>
					</h5>
				)}
			</div>
		</div>
	);
}
