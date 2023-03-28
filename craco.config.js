const path =require('path')

const resolve=str => path.resolve(__dirname,str)

module.exports={
    webpack:{
        alias:{
            '@':resolve('src'),
            '@mui/styled-engine': '@mui/styled-engine-sc'
        }
    }
}