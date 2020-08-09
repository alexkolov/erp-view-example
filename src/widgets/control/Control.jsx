import moment from 'moment';
import React, { useMemo, memo } from 'react';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { getDays } from '../../utils/date';
import './control.scss';

export const Controls = memo(() => {

  const dateRange = useMemo(() => {
    const fn = dt => moment(dt).format('DD.MM.YYYY');
    const days = getDays(new Date(), 3);
    return `${ fn(days[ 0 ]) } - ${ fn(days[ 2 ]) }`;
  }, []);

  return (
    <div className='controls'>
      <div className='control state'>
        <div className='label'>
          Arbeitsstation
        </div>

        <FormControl>
          <Select native value={ 'Drehen' }>
            <option value={ 'Drehen' }>
              Drehen
            </option>
          </Select>
        </FormControl>
      </div>

      <div className='control date'>
        <div className='label'>
          { dateRange }
        </div>

        <FormControl>
          <Select native value={ 'Wöchentlich' }>
            <option value={ 'Wöchentlich' }>
              Wöchentlich
            </option>
          </Select>
        </FormControl>
      </div>
    </div>
  );
});
