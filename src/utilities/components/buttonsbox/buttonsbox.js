import { Fragment } from '@wordpress/element';
import { ButtonGroup, Button, Dashicon } from '@wordpress/components';

// import style
import './buttonsbox.scss';

const ButtonsBox = ({ label, icons, onClick, value, options }) => {
	return (
		<Fragment>
			<p className="atbs__label">{label}</p>
			<div className="atbs__titles_group">
				<ButtonGroup>
					{options.map((option) => (
						<Button
							isPressed={option.value === value}
							key={option.value}
							onClick={() => onClick(option.value)}
							title={option.label}
							disabled={option.pro && option.pro === true}
						>
							{icons ? (
								<Dashicon icon={icons[option.value]} />
							) : (
								option.label
							)}
							{option.pro && option.pro === true && (
								<span className="atbs__pro-badge">Pro</span>
							)}
						</Button>
					))}
				</ButtonGroup>
			</div>
		</Fragment>
	);
};

export default ButtonsBox;
