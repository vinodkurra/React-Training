// API CALL WITH CALLBACKS

const formtResponse = (response, error) => {
  console.log(response, error);
};
const getData = (formtResponse) => {
  const response = apiCall();
  if (response.success) {
    formtResponse(response.data);
  }
  if (response.error) {
    formtResponse(response, true);
  }
};

// EX 2

const callBack = (response) => {
    filters & maps

    setState()
}

const fetchData = (callBack) => {
  const data = apiCalls();

  if (data.status === 200) {
      callBack(data);
      
  }

  if (data.status === 201) {
    callBack(data);
  }

  if (data.status === 400) {
    callBack(data);
  }

  if (data.status === 500) {
    callBack(data);
  }
};

// API CALL WITH PROMISES

const getUsersData = () => {
  return new Promise((resolve, reject) => {
    const response = apiCall();
    if (response.success) {
      resolve(response);
    } else {
      reject("Failed To fetch data");
    }
  });
};

const fetchuserData = () => {
    setLoading(true)
  getUsersData
    .then((data) => {
      data.filter;
      Map;
      return processedData;
    })
      .then((processedData) => {
        set state and display the data
      }).catch((error) => {
        
      }).finally{
        setLoading(false)
        setModal(false)
        setUsers([])
    }
};


callbacks -> basic  ->  events triggering, parent & child relation
promises -> average -> promise.all();
async & await -> advanced -> async functions // api calls, file reading  :  small challenge task

const getData = async() => {
    const data =  await apiCall();
    const processedData = await data.filter(1000 records process)
    setUsers(processedData)
}


async await + try catch finally

promises  // then, catch, finally, all();
    const [data1, data2, data3] = await Promise.all([
       apiCall1(),
       apiCall2(),
       apiCall3(),
    ]);
      

