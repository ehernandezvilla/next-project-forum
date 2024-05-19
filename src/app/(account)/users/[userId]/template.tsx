

export default function UserTemplate({children} : {children: React.ReactNode}) {

const requestTime = new Date()

return (
  <div>
    {children}
    <footer>Last Checked: {requestTime.toLocaleTimeString()}</footer>
  </div>
)

}

