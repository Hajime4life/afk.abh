import ImageSlider from "../components/ImageSlider";

const images = [
	'https://lh3.googleusercontent.com/97wlzOMJXbc3ESycg3KNUkrffVKDf46GssD7JDpFLgSzy9FarRXnu8sskdhIfX0cliWfd6nr0I1dVgvcTVm5s34XN97f4mHPGtNbd_cF8JTe5oNxkCnIPMuBvGb-C-jXow=w1280',
	'https://lh6.googleusercontent.com/iBgj325ka8rliq8uVEBDGzKEnyo9g9ZhJUSZ9MGYof4EhpYFHO6DxIt28gPY0kF3-oWg60uS0lHZ40cuuTi6uks2nHv-DUfUGL07d8nkEHNFfPRTr0_n_9Tap9OA9gDpZg=w1280',
	'https://lh6.googleusercontent.com/kGA_9ZE6tNHB_CmqakKY0BNUssBW66R9lVbnzBR7WzHzhJycspMjtiaKx7JpyLKvgujWohasFVP5MvbeatwSc0ssaS75ibgbl2Lyn534CZ-qoSvi0RISVosCbyWEoraDlQ=w1280',
]

const Home = () => {
    return (
			<div className='home'>
				
				<h1>Это главная страница</h1>
				<div className='img-container' style={{ overflowX: 'auto', whiteSpace: 'nowrap' }}>
					{Array.from({ length: 12 }).map((_, index) => (
						<div key={index} style={{ display: 'inline-block', margin: '0 10px' }}>
							<ImageSlider images={images} />
						</div>
					))}
				</div>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, deserunt sed.
					Sapiente, eius tenetur! Necessitatibus doloremque excepturi quo! Qui ullam eaque a, vero
					commodi at reiciendis possimus soluta illo fuga accusamus assumenda voluptatem veniam.
					Dicta vero exercitationem earum harum omnis id cupiditate maiores magni tenetur enim quae
					obcaecati labore dolorum amet odit iure dolore expedita excepturi itaque debitis
					perspiciatis doloribus, ratione nemo? Ex unde beatae inventore fuga, minima obcaecati
					debitis cumque labore quos. Tempora sapiente dignissimos doloribus voluptate eaque
					aliquam! Natus beatae autem labore ipsa, aliquid sapiente cumque recusandae cum obcaecati
					earum voluptate est minima excepturi numquam, corrupti non explicabo veniam placeat
					voluptatum quidem modi asperiores odit cupiditate. Cumque veritatis, maiores deserunt quod
					quam quisquam, provident architecto qui deleniti odit adipisci eligendi vero impedit
					asperiores, sed alias. Amet, omnis. Iste aliquam, eligendi alias adipisci autem officiis
					culpa ullam in voluptates omnis aspernatur porro hic deserunt ducimus voluptatum officia
					tempora cumque! Quod repellat optio in beatae minima illum aliquam ex ad est velit,
					corporis accusamus quis. Dolore cupiditate eaque dolor, id architecto delectus voluptate.
					Ad officia nisi hic saepe distinctio placeat eaque numquam dignissimos nesciunt, quia
					corporis obcaecati quas culpa illum pariatur amet alias vel. Perferendis incidunt
					exercitationem nisi ratione inventore, impedit veritatis. Quas commodi nemo deleniti.
					Quisquam accusamus voluptates itaque fugit assumenda magnam, perspiciatis cum quia unde
					corrupti adipisci minima animi nemo, quae natus mollitia totam dolorem eveniet earum harum
					error vitae. Excepturi sequi voluptatum facere est at minima, hic vero ipsa odio, labore
					nulla voluptates expedita harum sed illum ducimus quos voluptatem iure aut explicabo
					itaque? Magni molestiae fuga voluptatum excepturi nihil omnis quibusdam incidunt,
					asperiores tenetur consequuntur eveniet harum pariatur officiis at sunt quasi, aliquam,
					nostrum vitae quas delectus cupiditate. Nulla unde, et totam numquam sint omnis. Ullam
					quisquam, dolor aperiam fugiat nulla optio illum libero at tempora!
				</p>
			</div>
		)
}

export default Home;