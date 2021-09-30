// import React, { useState, useEffect, useRef } from "react";
// import { Link } from "react-router-dom";
// import { profile } from "../../reducers/profileReducer";
// import { useSelector, useDispatch } from "react-redux";
// import axios from "axios";
// const ProfileGithub = () => {
//   axios.defaults.headers.post["Access-Control-Allow-Headers"] = "client_id";
//   axios.defaults.headers.post["Access-Control-Allow-Headers"] = "client_secret";

//   // axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
//   axios.defaults.headers.post["Content-Type"] =
//     "application/x-www-form-urlencoded";
//   const Profile = useSelector(profile);
//   const [profiles, setProfiles] = useState(Profile);
//   const username = Profile.githubusername;
//   const dispatch = useDispatch();
//   const [clientId, setClientId] = useState("def7c4814261d9a47d74");
//   const [count, setCount] = useState(5);
//   const [sort, setSort] = useState("created: asc");
//   const [clientSecret, setClientSecret] = useState(
//     "a363d506cd64361dd7897bd4ebd62c4fdb9c58e9"
//   );
//   const [repos, setRepos] = useState([]);
//   useEffect(() => {
//     // Runs after the first render() lifecycle
//     // get current Profile

//     // dispatch(profileLoading());
//     // console.log(handle);

//     axios
//       .get(
//         "https://api.github.com/users/Athul0491/repos?per_page=5&sort=created: asc&",
//         {
//           headers: {
//             // "Access-Control-Allow-Headers": client_secret,
//             // "Access-Control-Allow-Headers": " client_id, client_secret",
//             client_id: "def7c4814261d9a47d74",
//             client_secret: "a363d506cd64361dd7897bd4ebd62c4fdb9c58e9",
//           },
//         }
//       )
//       .then((res) => {
//         res.json();

//         console.log(res);
//         // setPro(res.data);
//       })
//       .then((data) => {
//         setRepos({ repos: data });
//         console.log(data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);
//   const repoItems = repos.map((repo) => (
//     <div key={repo.id} className="card card-body mb-2">
//       <div className="row">
//         <div className="col-md-6">
//           <h4>
//             <Link to={repo.html_url} className="text-info" target="_blank">
//               {repo.name}
//             </Link>
//           </h4>
//           <p>{repo.description}</p>
//         </div>
//         <div className="col-md-6">
//           <span className="badge badge-info mr-1">
//             Stars: {repo.stargazers_count}
//           </span>
//           <span className="badge badge-secondary mr-1">
//             Watchers: {repo.watchers_count}
//           </span>
//           <span className="badge badge-success">Forks: {repo.forks_count}</span>
//         </div>
//       </div>
//     </div>
//   ));
//   return (
//     <div>
//       <hr />
//       <h3 className="mb-4">Latest Github Repos</h3>
//       {repoItems}
//     </div>
//   );
// };

// export default ProfileGithub;
