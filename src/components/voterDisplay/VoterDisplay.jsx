import { useState, useEffect, useContext } from "react";
import { WalletContext } from "../Wallet";
import "./VoterDisplay.css";


const VoterDisplay = () => {
  const { contract } = useContext(WalletContext);
  const [voters, setVoters] = useState([]);
  const [candidates, setCandidates] = useState([]);
  //const[votestatus,setVotestatus]=useState("");
  useEffect(() => {
    const voterInfo = async () => {
      const voters = await contract.methods.voterList().call();
     const candidates = await contract.methods.candidateList().call();
    // const votestatus=await contract.methods.voteStatus().call();
     console.log(candidates)
   
      console.log(voters)
      setVoters(voters);
      setCandidates(candidates);
    //  setVoters(votestatus);
     // setVotestatus(votestatus);
     
    };
    contract && voterInfo();
  }, [contract]);

  if (voters.length === 0) {
    return null;
  }

  return (
   
    
    <div className="table-container">
   
    
      <table className="voter-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>id</th>
            <th>votestatus</th>
         
          </tr>
        </thead>
        <tbody>
          {voters.length > 0 ? (
            voters.map((voter) => (
              <tr key={voter.voterId}>
                <td>{voter.name}</td>
                <td>{voter.age}</td>
                <td>{voter.gender}</td>
                <td>{voter.voterId}</td>
                <td>{voter.voteStatus}</td>
                
              </tr>
            ))
          ) : (
            <p></p>
          )}
        </tbody>
      </table>
     
      <table className="voter-table">
        <thead>
          <tr>
           
            <th>Party</th>
            
            <th>candidate_Id</th>
          </tr>
        </thead>
        <tbody>
          {candidates.length > 0 ? (
            candidates.map((candidate) => (
              <tr key={candidate.party}>
              
                <td>{candidate.party}</td>
               
                <td>{candidate.candidateId}</td>
              </tr>
            ))
          ) : (
            <p></p>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default VoterDisplay;
