import Chance from 'chance'
const chance=Chance()
export const fakeData = () => {
    return {
      name: chance.name({ middle: true }),
    };
  };