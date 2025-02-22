interface MagicalGirl {
  name: string;
  age: number;
  origin_city: string;
  status: 'Active' | 'Disappeared' | 'Rescued';
  contract_date: Date;
}

export const magicalGirls: MagicalGirl[] = [
  {
    name: 'Kagura',
    age: 16,
    origin_city: 'Tokyo',
    status: 'Active',
    contract_date: new Date('2024-01-01'),
  },
  {
    name: 'Luna Starlight',
    age: 14,
    origin_city: 'New York',
    status: 'Active',
    contract_date: new Date('2023-11-15'),
  },
  {
    name: 'Sakura Blossom',
    age: 15,
    origin_city: 'Kyoto',
    status: 'Disappeared',
    contract_date: new Date('2022-05-20'),
  },
  {
    name: 'Aurora Frost',
    age: 17,
    origin_city: 'Oslo',
    status: 'Rescued',
    contract_date: new Date('2021-12-10'),
  },
  {
    name: 'Mirage Shadow',
    age: 16,
    origin_city: 'London',
    status: 'Active',
    contract_date: new Date('2023-08-25'),
  },
  {
    name: 'Celeste Moonbeam',
    age: 13,
    origin_city: 'Paris',
    status: 'Disappeared',
    contract_date: new Date('2020-07-04'),
  },
  {
    name: 'Ember Flame',
    age: 18,
    origin_city: 'Sydney',
    status: 'Active',
    contract_date: new Date('2024-02-14'),
  },
  {
    name: 'Nova Starfall',
    age: 14,
    origin_city: 'Toronto',
    status: 'Rescued',
    contract_date: new Date('2019-09-30'),
  },
  {
    name: 'Seraphina Dawn',
    age: 16,
    origin_city: 'Berlin',
    status: 'Active',
    contract_date: new Date('2023-03-22'),
  },
  {
    name: 'Zephyr Breeze',
    age: 15,
    origin_city: 'Seoul',
    status: 'Disappeared',
    contract_date: new Date('2021-04-18'),
  },
];
