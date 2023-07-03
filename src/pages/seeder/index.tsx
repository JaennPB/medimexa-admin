import Role, {roleQuery} from '@/firebase/models/Role'
import User from '@/firebase/models/User';
import Box from '@/firebase/models/Box';
import QuizType from '@/firebase/models/QuizType';
import TypeMedia from '@/firebase/models/TypeMedia';
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


  const runFile = async ()=>{

    let file = new TypeMedia({
      name:'imagen',
    });
    await file.save();

    file = new TypeMedia({
      name:'pdf',
    });
    await file.save();

    file = new TypeMedia({
      name:'otro',
    });
    await file.save();

    alert('type file completados')

  }

  const runBox = async ()=>{

    let box = new Box({
      name:'Box 1',
      days:1,
    });
    await box.save();

    box = new Box({
      name:'Box 2',
      days:2,
    });
    await box.save();

    box = new Box({
      name:'Box 3',
      days:3,
    });
    await box.save();

    box = new Box({
      name:'Box 4',
      days:7,
    });
    await box.save();
 

    box = new Box({
      name:'Box 5',
      days:14,
    });
    await box.save();
 
    box = new Box({
      name:'Box 6',
      days:28,
    });
    await box.save();
 

    alert('boxes completados')

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
    <button style={buttonStyle} onClick={runBox}>Boxes</button>
    <button style={buttonStyle} onClick={runFile}>Type media</button>
    </main>
  );
}
