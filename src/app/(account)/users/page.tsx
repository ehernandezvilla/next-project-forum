import { USERS, User } from '../../../data/userData'
import Button from '../../../components/button/Button'

export default function Page() {
  return (
    <>
      <h1>All Users</h1>
      <ul>
        {USERS.map((user: User) => (
          <li key={user.id}>
            <Button
              href={`/users/${user.id}`}
              label={`User ID: ${user.id}`}
            />
          </li>
        ))}
      </ul>
    </>
  )
}
