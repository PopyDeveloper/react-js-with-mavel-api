import React from 'react'

export default function Serie (props) {
  const { data } = props;

  return (
    <>
      {
        data['title'] &&
        <>
          <h3>{data['title']}</h3>
          <img src={`${data['thumbnail']['path']}.${data['thumbnail']['extension']}`} alt={data['title']}/>
        </>
      }

    </>
  )
}
