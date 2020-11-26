import Input from './FormItems/Input'
import Select from './FormItems/Select'
import Radio from './FormItems/Radio'
import Checkbox from './FormItems/Checkbox'
import Textarea from './FormItems/Textarea'
import Hr from './FormItems/Hr'
import Slot from './FormItems/Slot'
import Date from './FormItems/Date'
import Upload from './FormItems/Upload'
import DateTime from './FormItems/DateTime'

const components = {
  'text-item': Input,
  'input-item': Input,
  'password-item': Input,
  'select-item': Select,
  'radio-item': Radio,
  'checkbox-item': Checkbox,
  'textarea-item': Textarea,
  'hr-item': Hr,
  'date-item': Date,
  'datetime-item': Date,
  'upload-item': Upload,
  'uploader-item': Upload,
  'slot-item': Slot,
  'datetime2-item': DateTime
}

export default components
