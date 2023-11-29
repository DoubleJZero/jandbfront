import axios from 'axios'

export default {
  methods: {
    $callAPI(url, method, data) {
      
      if(method == "post"){
        return new Promise(function(resolve, reject) {
          axios.post(url,data).then((res) => {
            resolve(res);
          }).catch((error) => {
            reject(error);
          });
        });
      }else{
        return new Promise(function(resolve, reject) {
          axios.get(url,data).then((res) => {
            resolve(res);
          }).catch((error) => {
            reject(error);
          });
        });
      }
    }
  }
}