import axios from 'axios';
import dayjs from 'dayjs';
import {toast} from 'react-toastify'

export const api = axios.create({
  baseURL: "https://api.bhopalpropertyking.com/",
});

export const getAllProperties = async () => {
    try {
        const response =  await api.get('api/residency/allres', {
            timeout: 10 * 1000
        })
        if(response.status === 400 || response.status === 500){
            throw response.data
        }
        return response.data
        
    } catch (error) {
        toast.error("Error fetching properties");
        throw error
    }
}

export const getProperty = async (id) => {
    try {
        const response =  await api.get(`api/residency/${id}`, {
            timeout: 10 * 1000
        })
        if(response.status === 400 || response.status === 500){
            throw response.data
        }
        return response.data
        
    } catch (error) {
        toast.error("Error fetching properties");
        throw error
    }
}
export const createUser = async (email, token) => {
    try {
      await api.post(
        'api/user/register',
        { email },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          timeout: 10 * 1000,
        }
      );
    } catch (error) {
      toast.error("Error creating user");
      throw error;
    }
  };
  export const bookVisit = async (date, propertyId, email, token) => {
    console.log('Booking visit with email:', email); // Debug log
    try {
      await api.post(
        `api/user/bookVisit/${propertyId}`,
        {
          email,
          id: propertyId,
          date: dayjs(date).format("DD-MM-YYYY"),
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    } catch (error) {
      toast.error("Error booking visit, please try again");
      throw error;
    }
  };


export const removeBooking = async(id, email,token)=> {
 try {
  await api.post(`/api/user/removeBooking/${id}` )
 }
 catch (error) {
  toast.error("something went wrong, please try again");
  throw error;
 }
  
}

export const createResidency = async (data,token,userEmail)=> {
  const requestData = {...data, userEmail};
  console.log(requestData);
  try {
    const res = await api.post('api/residency/create', requestData, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );
    } catch (error) {
      throw error;
    }
  }