import { uuid } from "../../utils/uniqueId.js";
import { addAccordionWrapper } from "../accordion/accordionTemplate.js";

export function feedbackTemplate(classes) {
  const feedback = `
    <div class="feedbackContainer ${classes}" id='feedback${uuid()}'>
      <div class="right-side">
        <h2 class="topic-text">Отправьте нам сообщение</h2>
        <p>
          Если у вас имеются вопросы-обратитесь в нашу службу обратной связи.
        </p>

        <form action="#">
          <div class="input-box">
            <input type="text" placeholder="Ваше имя" />
          </div>
          <div class="input-box">
            <input type="text" placeholder="Введите email" />
          </div>
          <div class="input-box">
            <input type="text" placeholder="Введите телефон" />
          </div>
          <div class="input-box message-box">
            <textarea placeholder="Сообщение"></textarea>
          </div>
          <div class="button">
            <input type="button" value="Отправить" />
          </div>
        </form>
      </div>
    </div>`;
  return feedback;
}

export function feedbackMenuTemplate() {
  return addAccordionWrapper(
    "Feedback form",
    `
    <form name="feedback" id="feedbackCustomizer">
      <div class="flex direction-col">

        <label for="feedbackBackground">Choose background:</label>
        <select
        name="background"
        id="feedbackBackground"
        >
          <option value="">--Please choose an option--</option>
          <option value="feedbackBackgroundGreen">Green</option>
          <option value="feedbackBackgroundBlue">Blue</option>
          <option value="feedbackBackgroundOrange">Orange</option>
        </select>
        
        <label for="feedbackFont">Choose font family:</label>
        <select name="font" id="feedbackFont">
          <option value="">--Please choose an option--</option>
          <option value="feedbackFontLato">Lato</option>
          <option value="feedbackFontCursive">Cursive</option>
          <option value="paragraphWithImgFontGill">Gill Sans</option>
        </select>
        <button type="submit" class="self-center">Add</button>
      </div>
    </form>
  `
  );
}
