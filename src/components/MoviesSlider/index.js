// Write your code here
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import MovieItem from '../MovieItem'

const MoviesSlider = props => {
  const {moviesList} = props
  console.log(moviesList)

  const settings = {
    dots: false,
    slidesToScroll: 4,
    slidesToShow: 4,
  }

  return (
    <>
      <Slider {...settings}>
        {moviesList.map(each => (
          <MovieItem key={each.id} data={each} />
        ))}
      </Slider>
    </>
  )
}

export default MoviesSlider
