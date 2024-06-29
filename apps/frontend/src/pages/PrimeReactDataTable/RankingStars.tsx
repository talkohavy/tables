import StarIcon from '../../components/svgs/Star';

const STAR_COLORS: any = {
  full: 'fill-teal-500 stroke-teal-500',
  half: 'fill-transparent stroke-teal-500',
  empty: 'fill-transparent stroke-teal-500',
};

export default function RankingStars({ starsCount = 3.5 }) {
  const starsArr = [];
  for (let i = 0; i < 5; i++) {
    if (starsCount > 1) {
      starsArr.push('full');
    } else if (starsCount > 0.49) {
      starsArr.push('half');
    } else {
      starsArr.push('empty');
    }
    starsCount--;
  }

  return (
    <div className='flex items-center justify-center gap-1'>
      {starsArr.map((starType, index) => (
        <StarIcon key={index} className={STAR_COLORS[starType]} />
      ))}
    </div>
  );
}
