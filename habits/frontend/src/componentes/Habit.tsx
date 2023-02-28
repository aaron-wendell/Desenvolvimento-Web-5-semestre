interface HabitProps {
    completed: number
   }
   export function Habit(props: HabitProps){
    return (
    <div >
    Teste {props.completed}
    </div>
    )
   }