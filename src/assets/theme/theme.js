export const theme ={
    color:{
        primly:'red'
    },
    mix:{
        boxShadow: `
        transition: box-shadow 200ms ease;
        &:hover {
          box-shadow: 0 2px 4px rgba(0,0,0,.18);
        } `,
        cursor: 'pointer'
    }
}