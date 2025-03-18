import React from 'react'

const Checkbox = ({id,value,name}) => {
    console.log(id,value,name);
  return (
    <div className="">
    <label
      class="relative text-[#008080] flex cursor-pointer items-center justify-center gap-[1em]"
      for={id}
      >
      <input
        class="peer appearance-none"
        key={id}
        id={id}
        name={name}
        type="checkbox"
        />
      <span class="absolute left-0 top-1/2 h-[1.5em] w-[1.5em] -translate-x-full -translate-y-1/2 rounded-[0.25em] border-[2px] border-[#008080]"></span>
      <svg
        viewBox="0 0 69 89"
        class="absolute left-0 top-1/2 h-[1.5em] w-[1.5em] -translate-x-full -translate-y-1/2 duration-500 ease-out [stroke-dasharray:100] [stroke-dashoffset:100] peer-checked:[stroke-dashoffset:0]"
        fill="none"
        height="29"
        width="49"
        xmlns="http://www.w3.org/2000/svg"
        >
        <path
          d="M.93 63.984c3.436.556 7.168.347 10.147 2.45 4.521 3.19 10.198 8.458 13.647 12.596 1.374 1.65 4.181 5.922 5.598 8.048.267.4-1.31.823-1.4.35-5.744-30.636 9.258-59.906 29.743-81.18C62.29 2.486 63.104 1 68.113 1"
          stroke-width="6px"
          stroke="#008080"
          pathLength="100"
          ></path>
      </svg>

      <p class="text-[1em] font-bold [user-select:none]">{value}</p>
    </label>
  </div>
  )
}

export default Checkbox