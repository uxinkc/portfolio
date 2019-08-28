/////// FAKE API ///////

const users = [
  { name: 'John Stevens', email: 'john.stevens@domain.com' },
  { name: 'Mark Majors', email: 'mark.majors@domain.com' }
];

export const service = {

  getAllUsers( callback ){
    setTimeout( () => callback( users ) ,50);
  }
  
};