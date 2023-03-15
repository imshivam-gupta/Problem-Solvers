import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const ProblemDescr = () => {

    const [problem,setProblem] = useState('');
    const { id } = useParams();

    const [loading,setLoading] = useState(true)
    const [answered,setAnswered] = useState(false)
    const [correct,setCorrect] = useState(true)
    const [ip,setIp] = useState('')

    const ansCheckHandler = () => {
        setAnswered(true)
        if(problem.ans){
            if(problem.ans!==ip) setCorrect(false)
        }
        console.log(answered)
    }

    useEffect(() => {
        setLoading(true);
       axios.get(`http://localhost:4000/api/problems/get-problem/${id}`)
       .then((res)=>setProblem(res.data))
       .catch((err)=> console.log(err));
       console.log(problem);
        setLoading(false)
      }, []);
    
      if(loading) return <div>Loading...</div>

  return (
    <div className='px-14 py-14'>
        <h1 className='text-2xl'>{problem.name}</h1>
        <p className='mt-4'>{problem.statment}</p>
        <input  className='px-5 py-2 border-2 mt-8 ' onChange={(e)=>setIp(e.target.value)} />
        {
            answered && correct && <div className='text-lg'>Correct</div>
        }
        {
            answered && !correct && <div className='text-lg'>Better Luck Next Time</div>
        }
        {!answered && <div onClick={ansCheckHandler} className='cursor-pointer'>Check</div>}
      
    </div>
  )
}

export default ProblemDescr