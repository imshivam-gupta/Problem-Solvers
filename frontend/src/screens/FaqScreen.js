import React from 'react'

const FaqScreen = () => {
  return (
    <section id="faq">
<div
  id="faq"
  class="mt-20 mx-auto faq-body gap-x-8 h-[auto] flex flex-col items-center justify-center px-4 md:px-0 md:gap-x-16 w-full pb-12"
>
  <img
    src="../img/faq.jpg"
    id="faq-image"
    class="md:pt-12 min-w-200px"
    alt=""
  />

  <div class="container">
    <details class="faq-card">
      <summary>
        What does your website do?
        <span class="faq-open-icon ml-2">+</span>
      </summary>
      <span class="faq-card-spoiler">
        We will tell you shortly</span
      >
    </details>


    <h2 class="faq-heading">Still have questions?</h2>
    <p class="faq-aftertext">
      If you cannot find answer to your question in our FAQ, you can
      always<br />
      contact us. We will answer shortly!
    </p>
  </div>
</div>
</section>

  )
}

export default FaqScreen