const Partners = () => {
	const partners = [
		{
			id: 1,
			name: 'СИСТЕМА',
			description:
				'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto accusamus nam amet et voluptatibus quo adipisci nihil distinctio hic voluptatum! Animi temporibus, nobis, accusamus tempora deserunt rem dignissimos cupiditate officiis nihil placeat dolores quos! Minima autem obcaecati esse suscipit, commodi error doloribus eius ipsa iusto, voluptates earum sint, impedit eum!',
			logo: 'https://www.cyxym.net/content/images/elements/logo_blue.png',
		},
		{
			id: 2,
			name: 'A-Mobile',
			description:
				'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto accusamus nam amet et voluptatibus quo adipisci nihil distinctio hic voluptatum! Animi temporibus, nobis, accusamus tempora deserunt rem dignissimos cupiditate officiis nihil placeat dolores quos! Minima autem obcaecati esse suscipit, commodi error doloribus eius ipsa iusto, voluptates earum sint, impedit eum!',

			logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c0/%D0%9B%D0%BE%D0%B3%D0%BE_%D0%B0-%D0%BC%D0%BE%D0%B1%D0%B0%D0%B8%D0%BB.png',
		},
		{
			id: 3,
			name: 'Aquafon',
			description:
				'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto accusamus nam amet et voluptatibus quo adipisci nihil distinctio hic voluptatum! Animi temporibus, nobis, accusamus tempora deserunt rem dignissimos cupiditate officiis nihil placeat dolores quos! Minima autem obcaecati esse suscipit, commodi error doloribus eius ipsa iusto, voluptates earum sint, impedit eum!',

			logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDBWvbhvJbaCvnZ65UKmKgbx4G4Y0uw1nshj9iQ6sFjg&s',
		},
	]

	return (
		<div className='partners'>
			<h1>Партнеры</h1>
			<div className='partners-list'>
				{partners.map(partner => (
					<div key={partner.id} className='partner-card'>
						<div className='partner-description'>
							<h4>{partner.name}</h4>
							<p>{partner.description}</p>
						</div>
						<img src={partner.logo} alt={partner.name} className='partner-logo' />
					</div>
				))}
			</div>
		</div>
	)
}

export default Partners
