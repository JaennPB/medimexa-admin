import Role, {roleQuery} from '@/firebase/models/Role'
import User from '@/firebase/models/User';
import QuizType from '@/firebase/models/QuizType';

export default function Home() {


  const runRoles = async ()=>{

    let role = new Role({
      name:'administrador',
    });
    await role.save();

    role = new Role({
      name:'maestro',
    });
    await role.save();

    role = new Role({
      name:'estudiante',
    });
    await role.save();

    alert('roles completados')

  }


  const runQuizType = async ()=>{

    // let quiz = new QuizType({
    //   name:'mexaquiz',
    // });
    // await quiz.save();

     let quiz = new QuizType({
       name:'enarm',
     });
     await quiz.save();
   
    alert('quiz type completados')

  }


  const runUsers = ()=>{
    roleQuery.where('name','==','administrador').then((roleDb:any)=>{
      const role = roleDb[0];
      const user = new User({
        name:'usuario',
        lastname:'administrador',
        email:'administrador@medimexa.com',
        password:'root1234',
        role_id:role.data.id,
      })

      user.save()

    })

    roleQuery.where('name','==','estudiante').then((roleDb:any)=>{
      const role = roleDb[0];

      const user = new User({
        name:'usuario',
        lastname:'estudiante',
        email:'estudiante@medimexa.com',
        password:'root1234',
        role_id:role.data.id,
      })

      user.save()

    })
  }


  const buttonStyle = {
    border:1,
    borderColor:'black',
    backgroundColor:'white',
    margin:10,
    padding:10
  }

  return (
    <main className={`bg-base-200 h-screen flex justify-center items-center `} >


    <button style={buttonStyle} onClick={runRoles}>Roles </button>
    <button style={buttonStyle} onClick={runUsers}>Usuarios </button>
    <button style={buttonStyle} onClick={runQuizType}>Tipos de quiz </button>
    </main>
  );
}
