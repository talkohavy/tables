const dummyData = [
  {
    athlete: 'Michael Phelps',
    age: 23,
    country: 'United States',
    year: 2008,
    date: '24/08/2008',
    sport: 'Swimming',
    gold: 8,
    silver: 0,
    bronze: 0,
    total: 8,
  },
  {
    athlete: 'Michael Phelps',
    age: 19,
    country: 'United States',
    year: 2004,
    date: '29/08/2004',
    sport: 'Swimming',
    gold: 6,
    silver: 0,
    bronze: 2,
    total: 8,
  },
  {
    athlete: 'Michael Phelps',
    age: 27,
    country: 'United States',
    year: 2012,
    date: '12/08/2012',
    sport: 'Swimming',
    gold: 4,
    silver: 2,
    bronze: 0,
    total: 6,
  },
  {
    athlete: 'Natalie Coughlin',
    age: 25,
    country: 'United States',
    year: 2008,
    date: '24/08/2008',
    sport: 'Swimming',
    gold: 1,
    silver: 2,
    bronze: 3,
    total: 6,
  },
  {
    athlete: 'Aleksey Nemov',
    age: 24,
    country: 'Russia',
    year: 2000,
    date: '01/10/2000',
    sport: 'Gymnastics',
    gold: 2,
    silver: 1,
    bronze: 3,
    total: 6,
  },
  {
    athlete: 'Alicia Coutts',
    age: 24,
    country: 'Australia',
    year: 2012,
    date: '12/08/2012',
    sport: 'Swimming',
    gold: 1,
    silver: 3,
    bronze: 1,
    total: 5,
  },
  {
    athlete: 'Missy Franklin',
    age: 17,
    country: 'United States',
    year: 2012,
    date: '12/08/2012',
    sport: 'Swimming',
    gold: 4,
    silver: 0,
    bronze: 1,
    total: 5,
  },
  {
    athlete: 'Ryan Lochte',
    age: 27,
    country: 'United States',
    year: 2012,
    date: '12/08/2012',
    sport: 'Swimming',
    gold: 2,
    silver: 2,
    bronze: 1,
    total: 5,
  },
  {
    athlete: 'Allison Schmitt',
    age: 22,
    country: 'United States',
    year: 2012,
    date: '12/08/2012',
    sport: 'Swimming',
    gold: 3,
    silver: 1,
    bronze: 1,
    total: 5,
  },
  {
    athlete: 'Natalie Coughlin',
    age: 21,
    country: 'United States',
    year: 2004,
    date: '29/08/2004',
    sport: 'Swimming',
    gold: 2,
    silver: 2,
    bronze: 1,
    total: 5,
  },
  {
    athlete: 'Ian Thorpe',
    age: 17,
    country: 'Australia',
    year: 2000,
    date: '01/10/2000',
    sport: 'Swimming',
    gold: 3,
    silver: 2,
    bronze: 0,
    total: 5,
  },
  {
    athlete: 'Dara Torres',
    age: 33,
    country: 'United States',
    year: 2000,
    date: '01/10/2000',
    sport: 'Swimming',
    gold: 2,
    silver: 0,
    bronze: 3,
    total: 5,
  },
  {
    athlete: 'Cindy Klassen',
    age: 26,
    country: 'Canada',
    year: 2006,
    date: '26/02/2006',
    sport: 'Speed Skating',
    gold: 1,
    silver: 2,
    bronze: 2,
    total: 5,
  },
  {
    athlete: 'Nastia Liukin',
    age: 18,
    country: 'United States',
    year: 2008,
    date: '24/08/2008',
    sport: 'Gymnastics',
    gold: 1,
    silver: 3,
    bronze: 1,
    total: 5,
  },
  {
    athlete: 'Marit Bjørgen',
    age: 29,
    country: 'Norway',
    year: 2010,
    date: '28/02/2010',
    sport: 'Cross Country Skiing',
    gold: 3,
    silver: 1,
    bronze: 1,
    total: 5,
  },
  {
    athlete: 'Sun Yang',
    age: 20,
    country: 'China',
    year: 2012,
    date: '12/08/2012',
    sport: 'Swimming',
    gold: 2,
    silver: 1,
    bronze: 1,
    total: 4,
  },
  {
    athlete: 'Kirsty Coventry',
    age: 24,
    country: 'Zimbabwe',
    year: 2008,
    date: '24/08/2008',
    sport: 'Swimming',
    gold: 1,
    silver: 3,
    bronze: 0,
    total: 4,
  },
  {
    athlete: 'Libby Lenton-Trickett',
    age: 23,
    country: 'Australia',
    year: 2008,
    date: '24/08/2008',
    sport: 'Swimming',
    gold: 2,
    silver: 1,
    bronze: 1,
    total: 4,
  },
  {
    athlete: 'Ryan Lochte',
    age: 24,
    country: 'United States',
    year: 2008,
    date: '24/08/2008',
    sport: 'Swimming',
    gold: 2,
    silver: 0,
    bronze: 2,
    total: 4,
  },
  {
    athlete: 'Inge de Bruijn',
    age: 30,
    country: 'Netherlands',
    year: 2004,
    date: '29/08/2004',
    sport: 'Swimming',
    gold: 1,
    silver: 1,
    bronze: 2,
    total: 4,
  },
  {
    athlete: 'Petria Thomas',
    age: 28,
    country: 'Australia',
    year: 2004,
    date: '29/08/2004',
    sport: 'Swimming',
    gold: 3,
    silver: 1,
    bronze: 0,
    total: 4,
  },
  {
    athlete: 'Ian Thorpe',
    age: 21,
    country: 'Australia',
    year: 2004,
    date: '29/08/2004',
    sport: 'Swimming',
    gold: 2,
    silver: 1,
    bronze: 1,
    total: 4,
  },
  {
    athlete: 'Inge de Bruijn',
    age: 27,
    country: 'Netherlands',
    year: 2000,
    date: '01/10/2000',
    sport: 'Swimming',
    gold: 3,
    silver: 1,
    bronze: 0,
    total: 4,
  },
  {
    athlete: 'Gary Hall Jr.',
    age: 25,
    country: 'United States',
    year: 2000,
    date: '01/10/2000',
    sport: 'Swimming',
    gold: 2,
    silver: 1,
    bronze: 1,
    total: 4,
  },
  {
    athlete: 'Michael Klim',
    age: 23,
    country: 'Australia',
    year: 2000,
    date: '01/10/2000',
    sport: 'Swimming',
    gold: 2,
    silver: 2,
    bronze: 0,
    total: 4,
  },
  {
    athlete: "Susie O'Neill",
    age: 27,
    country: 'Australia',
    year: 2000,
    date: '01/10/2000',
    sport: 'Swimming',
    gold: 1,
    silver: 3,
    bronze: 0,
    total: 4,
  },
  {
    athlete: 'Jenny Thompson',
    age: 27,
    country: 'United States',
    year: 2000,
    date: '01/10/2000',
    sport: 'Swimming',
    gold: 3,
    silver: 0,
    bronze: 1,
    total: 4,
  },
  {
    athlete: 'Pieter van den Hoogenband',
    age: 22,
    country: 'Netherlands',
    year: 2000,
    date: '01/10/2000',
    sport: 'Swimming',
    gold: 2,
    silver: 0,
    bronze: 2,
    total: 4,
  },
  {
    athlete: 'An Hyeon-Su',
    age: 20,
    country: 'South Korea',
    year: 2006,
    date: '26/02/2006',
    sport: 'Short-Track Speed Skating',
    gold: 3,
    silver: 0,
    bronze: 1,
    total: 4,
  },
  {
    athlete: 'Aliya Mustafina',
    age: 17,
    country: 'Russia',
    year: 2012,
    date: '12/08/2012',
    sport: 'Gymnastics',
    gold: 1,
    silver: 1,
    bronze: 2,
    total: 4,
  },
  {
    athlete: 'Shawn Johnson',
    age: 16,
    country: 'United States',
    year: 2008,
    date: '24/08/2008',
    sport: 'Gymnastics',
    gold: 1,
    silver: 3,
    bronze: 0,
    total: 4,
  },
  {
    athlete: 'Dmitry Sautin',
    age: 26,
    country: 'Russia',
    year: 2000,
    date: '01/10/2000',
    sport: 'Diving',
    gold: 1,
    silver: 1,
    bronze: 2,
    total: 4,
  },
  {
    athlete: 'Leontien Zijlaard-van Moorsel',
    age: 30,
    country: 'Netherlands',
    year: 2000,
    date: '01/10/2000',
    sport: 'Cycling',
    gold: 3,
    silver: 1,
    bronze: 0,
    total: 4,
  },
  {
    athlete: 'Petter Northug Jr.',
    age: 24,
    country: 'Norway',
    year: 2010,
    date: '28/02/2010',
    sport: 'Cross Country Skiing',
    gold: 2,
    silver: 1,
    bronze: 1,
    total: 4,
  },
  {
    athlete: 'Ole Einar Bjørndalen',
    age: 28,
    country: 'Norway',
    year: 2002,
    date: '24/02/2002',
    sport: 'Biathlon',
    gold: 4,
    silver: 0,
    bronze: 0,
    total: 4,
  },
  {
    athlete: 'Janica Kostelic',
    age: 20,
    country: 'Croatia',
    year: 2002,
    date: '24/02/2002',
    sport: 'Alpine Skiing',
    gold: 3,
    silver: 1,
    bronze: 0,
    total: 4,
  },
  {
    athlete: 'Nathan Adrian',
    age: 23,
    country: 'United States',
    year: 2012,
    date: '12/08/2012',
    sport: 'Swimming',
    gold: 2,
    silver: 1,
    bronze: 0,
    total: 3,
  },
  {
    athlete: 'Yannick Agnel',
    age: 20,
    country: 'France',
    year: 2012,
    date: '12/08/2012',
    sport: 'Swimming',
    gold: 2,
    silver: 1,
    bronze: 0,
    total: 3,
  },
  {
    athlete: 'Brittany Elmslie',
    age: 18,
    country: 'Australia',
    year: 2012,
    date: '12/08/2012',
    sport: 'Swimming',
    gold: 1,
    silver: 2,
    bronze: 0,
    total: 3,
  },
  {
    athlete: 'Matt Grevers',
    age: 27,
    country: 'United States',
    year: 2012,
    date: '12/08/2012',
    sport: 'Swimming',
    gold: 2,
    silver: 1,
    bronze: 0,
    total: 3,
  },
  {
    athlete: 'Ryosuke Irie',
    age: 22,
    country: 'Japan',
    year: 2012,
    date: '12/08/2012',
    sport: 'Swimming',
    gold: 0,
    silver: 2,
    bronze: 1,
    total: 3,
  },
  {
    athlete: 'Cullen Jones',
    age: 28,
    country: 'United States',
    year: 2012,
    date: '12/08/2012',
    sport: 'Swimming',
    gold: 1,
    silver: 2,
    bronze: 0,
    total: 3,
  },
  {
    athlete: 'Ranomi Kromowidjojo',
    age: 21,
    country: 'Netherlands',
    year: 2012,
    date: '12/08/2012',
    sport: 'Swimming',
    gold: 2,
    silver: 1,
    bronze: 0,
    total: 3,
  },
  {
    athlete: 'Camille Muffat',
    age: 22,
    country: 'France',
    year: 2012,
    date: '12/08/2012',
    sport: 'Swimming',
    gold: 1,
    silver: 1,
    bronze: 1,
    total: 3,
  },
  {
    athlete: 'Mel Schlanger',
    age: 25,
    country: 'Australia',
    year: 2012,
    date: '12/08/2012',
    sport: 'Swimming',
    gold: 1,
    silver: 2,
    bronze: 0,
    total: 3,
  },
  {
    athlete: 'Emily Seebohm',
    age: 20,
    country: 'Australia',
    year: 2012,
    date: '12/08/2012',
    sport: 'Swimming',
    gold: 1,
    silver: 2,
    bronze: 0,
    total: 3,
  },
  {
    athlete: 'Rebecca Soni',
    age: 25,
    country: 'United States',
    year: 2012,
    date: '12/08/2012',
    sport: 'Swimming',
    gold: 2,
    silver: 1,
    bronze: 0,
    total: 3,
  },
  {
    athlete: 'Satomi Suzuki',
    age: 21,
    country: 'Japan',
    year: 2012,
    date: '12/08/2012',
    sport: 'Swimming',
    gold: 0,
    silver: 1,
    bronze: 2,
    total: 3,
  },
  {
    athlete: 'Dana Vollmer',
    age: 24,
    country: 'United States',
    year: 2012,
    date: '12/08/2012',
    sport: 'Swimming',
    gold: 3,
    silver: 0,
    bronze: 0,
    total: 3,
  },
  {
    athlete: 'Alain Bernard',
    age: 25,
    country: 'France',
    year: 2008,
    date: '24/08/2008',
    sport: 'Swimming',
    gold: 1,
    silver: 1,
    bronze: 1,
    total: 3,
  },
  {
    athlete: 'László Cseh Jr.',
    age: 22,
    country: 'Hungary',
    year: 2008,
    date: '24/08/2008',
    sport: 'Swimming',
    gold: 0,
    silver: 3,
    bronze: 0,
    total: 3,
  },
  {
    athlete: 'Matt Grevers',
    age: 23,
    country: 'United States',
    year: 2008,
    date: '24/08/2008',
    sport: 'Swimming',
    gold: 2,
    silver: 1,
    bronze: 0,
    total: 3,
  },
  {
    athlete: 'Margaret Hoelzer',
    age: 25,
    country: 'United States',
    year: 2008,
    date: '24/08/2008',
    sport: 'Swimming',
    gold: 0,
    silver: 2,
    bronze: 1,
    total: 3,
  },
  {
    athlete: 'Katie Hoff',
    age: 19,
    country: 'United States',
    year: 2008,
    date: '24/08/2008',
    sport: 'Swimming',
    gold: 0,
    silver: 1,
    bronze: 2,
    total: 3,
  },
  {
    athlete: 'Leisel Jones',
    age: 22,
    country: 'Australia',
    year: 2008,
    date: '24/08/2008',
    sport: 'Swimming',
    gold: 2,
    silver: 1,
    bronze: 0,
    total: 3,
  },
  {
    athlete: 'Kosuke Kitajima',
    age: 25,
    country: 'Japan',
    year: 2008,
    date: '24/08/2008',
    sport: 'Swimming',
    gold: 2,
    silver: 0,
    bronze: 1,
    total: 3,
  },
  {
    athlete: 'Andrew Lauterstein',
    age: 21,
    country: 'Australia',
    year: 2008,
    date: '24/08/2008',
    sport: 'Swimming',
    gold: 0,
    silver: 1,
    bronze: 2,
    total: 3,
  },
  {
    athlete: 'Jason Lezak',
    age: 32,
    country: 'United States',
    year: 2008,
    date: '24/08/2008',
    sport: 'Swimming',
    gold: 2,
    silver: 0,
    bronze: 1,
    total: 3,
  },
  {
    athlete: 'Pang Jiaying',
    age: 23,
    country: 'China',
    year: 2008,
    date: '24/08/2008',
    sport: 'Swimming',
    gold: 0,
    silver: 1,
    bronze: 2,
    total: 3,
  },
  {
    athlete: 'Aaron Peirsol',
    age: 25,
    country: 'United States',
    year: 2008,
    date: '24/08/2008',
    sport: 'Swimming',
    gold: 2,
    silver: 1,
    bronze: 0,
    total: 3,
  },
  {
    athlete: 'Steph Rice',
    age: 20,
    country: 'Australia',
    year: 2008,
    date: '24/08/2008',
    sport: 'Swimming',
    gold: 3,
    silver: 0,
    bronze: 0,
    total: 3,
  },
  {
    athlete: 'Jess Schipper',
    age: 21,
    country: 'Australia',
    year: 2008,
    date: '24/08/2008',
    sport: 'Swimming',
    gold: 1,
    silver: 0,
    bronze: 2,
    total: 3,
  },
  {
    athlete: 'Rebecca Soni',
    age: 21,
    country: 'United States',
    year: 2008,
    date: '24/08/2008',
    sport: 'Swimming',
    gold: 1,
    silver: 2,
    bronze: 0,
    total: 3,
  },
  {
    athlete: 'Eamon Sullivan',
    age: 22,
    country: 'Australia',
    year: 2008,
    date: '24/08/2008',
    sport: 'Swimming',
    gold: 0,
    silver: 2,
    bronze: 1,
    total: 3,
  },
  {
    athlete: 'Dara Torres',
    age: 41,
    country: 'United States',
    year: 2008,
    date: '24/08/2008',
    sport: 'Swimming',
    gold: 0,
    silver: 3,
    bronze: 0,
    total: 3,
  },
  {
    athlete: 'Amanda Beard',
    age: 22,
    country: 'United States',
    year: 2004,
    date: '29/08/2004',
    sport: 'Swimming',
    gold: 1,
    silver: 2,
    bronze: 0,
    total: 3,
  },
  {
    athlete: 'Antje Buschschulte',
    age: 25,
    country: 'Germany',
    year: 2004,
    date: '29/08/2004',
    sport: 'Swimming',
    gold: 0,
    silver: 0,
    bronze: 3,
    total: 3,
  },
  {
    athlete: 'Kirsty Coventry',
    age: 20,
    country: 'Zimbabwe',
    year: 2004,
    date: '29/08/2004',
    sport: 'Swimming',
    gold: 1,
    silver: 1,
    bronze: 1,
    total: 3,
  },
  {
    athlete: 'Ian Crocker',
    age: 21,
    country: 'United States',
    year: 2004,
    date: '29/08/2004',
    sport: 'Swimming',
    gold: 1,
    silver: 1,
    bronze: 1,
    total: 3,
  },
  {
    athlete: 'Grant Hackett',
    age: 24,
    country: 'Australia',
    year: 2004,
    date: '29/08/2004',
    sport: 'Swimming',
    gold: 1,
    silver: 2,
    bronze: 0,
    total: 3,
  },
];

export { dummyData };
