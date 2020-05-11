import React from "react"

import "./Signup.css"

class Signup extends React.Component {
  render() {
    return (
      <form action="https://app.convertkit.com/forms/1343076/subscriptions" class="seva-form formkit-form" method="post" data-sv-form="1343076" data-uid="b63667beec" data-version="5" data-options="{&quot;settings&quot;:{&quot;after_subscribe&quot;:{&quot;action&quot;:&quot;message&quot;,&quot;success_message&quot;:&quot;Success! Now check your email to confirm your subscription.&quot;,&quot;redirect_url&quot;:&quot;&quot;},&quot;analytics&quot;:{&quot;google&quot;:null,&quot;facebook&quot;:null,&quot;segment&quot;:null,&quot;pinterest&quot;:null},&quot;modal&quot;:{&quot;trigger&quot;:&quot;timer&quot;,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:5,&quot;devices&quot;:&quot;all&quot;,&quot;show_once_every&quot;:15},&quot;powered_by&quot;:{&quot;show&quot;:true,&quot;url&quot;:&quot;https://convertkit.com?utm_source=dynamic&amp;utm_medium=referral&amp;utm_campaign=poweredby&amp;utm_content=form&quot;},&quot;recaptcha&quot;:{&quot;enabled&quot;:false},&quot;return_visitor&quot;:{&quot;action&quot;:&quot;show&quot;,&quot;custom_content&quot;:&quot;&quot;},&quot;slide_in&quot;:{&quot;display_in&quot;:&quot;bottom_right&quot;,&quot;trigger&quot;:&quot;timer&quot;,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:5,&quot;devices&quot;:&quot;all&quot;,&quot;show_once_every&quot;:15},&quot;sticky_bar&quot;:{&quot;display_in&quot;:&quot;top&quot;,&quot;trigger&quot;:&quot;timer&quot;,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:5,&quot;devices&quot;:&quot;all&quot;,&quot;show_once_every&quot;:15}},&quot;version&quot;:&quot;5&quot;}" min-width="400 500 600 700 800" style="background-color: rgb(249, 250, 251); border-radius: 4px;"><div class="formkit-background" style="opacity: 0.2;"></div><div data-style="minimal"><div class="formkit-header" data-element="header" style="color: rgb(77, 77, 77); font-size: 27px; font-weight: 700;"><h1>Zapisz się na newsletter CodeToLearn!</h1></div><div class="formkit-subheader" data-element="subheader" style="color: rgb(104, 104, 104); font-size: 18px;"><p><span style="color:rgb(51, 51, 51)">Informacje o </span><span style="color:rgb(51, 51, 51)"><strong>nowych artykułach</strong></span><span style="color:rgb(51, 51, 51)"> i </span><span style="color:rgb(51, 51, 51)"><strong>sposobach na skuteczną naukę programowania</strong></span><span style="color:rgb(51, 51, 51)"> prosto na Twój e-mail</span></p></div><ul class="formkit-alert formkit-alert-error" data-element="errors" data-group="alert"></ul><div data-element="fields" data-stacked="false" class="seva-fields formkit-fields"><div class="formkit-field"><input class="formkit-input" name="email_address" placeholder="Twój adres email" required="" type="email" style="color: rgb(0, 0, 0); border-color: rgb(227, 227, 227); border-radius: 4px; font-weight: 400;"></div><button data-element="submit" class="formkit-submit formkit-submit" style="color: rgb(255, 255, 255); background-color: rgb(22, 119, 190); border-radius: 4px; font-weight: 400;"><div class="formkit-spinner"><div></div><div></div><div></div></div><span>Zapisz mnie</span></button></div><div class="formkit-guarantee" data-element="guarantee" style="color: rgb(77, 77, 77); font-size: 13px; font-weight: 400;"><p>Nie wysyłam spamu. Możesz wypisać się w każdej chwili.</p></div><a href="https://convertkit.com?utm_source=dynamic&amp;utm_medium=referral&amp;utm_campaign=poweredby&amp;utm_content=form" class="formkit-powered-by" data-element="powered-by" target="_blank" rel="noopener noreferrer">Powered By ConvertKit</a></div></form>
    )
  }
}

export default Signup
