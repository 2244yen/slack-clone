import React, { useState, } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form, Grid, Header, Message, Segment, Label } from 'semantic-ui-react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { authenticate } from '../../store/reducers/user';

interface IFormInput {
  email: string,
  password: string
}

const Login: React.FC = () => {
  const { handleSubmit, control, formState: { errors } } = useForm<IFormInput>();
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit: SubmitHandler<IFormInput> = async(data) => {
    const { email, password } = data;
    try {
      dispatch(authenticate({ email, password }));
      navigate('/');
      console.log('nav))')
    } catch (error) {
      const message = error as string;
      setMessage(message);
    }
  }

  return (
    <Grid style={{ height: '100vh' }} verticalAlign='middle' centered={true}>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='teal' textAlign='center'>
          Log in to ChatApp
        </Header>
        <Form size='large'>
          <Segment stacked>
            <Form.Field>
              <Controller
                name="email"
                control={control}
                rules={{ required: true }}
                defaultValue=""
                render={({ field }) => <Form.Input icon='envelope' type="email" iconPosition='left' placeholder='E-mail address' {...field} />}
              />
              {errors.email?.type === 'required' && <Label basic color='red'>Please enter a value</Label>}
            </Form.Field>

            <Form.Field>
              <Controller
                name="password"
                control={control}
                rules={{ required: true, minLength: 6 }}
                defaultValue=""
                render={({ field }) => <Form.Input icon='lock' type="password" iconPosition='left' placeholder='Password' {...field} />}
              />
              {errors.password?.type === 'required' && <Label basic color='red'>Please enter a value</Label>}
              {errors.password?.type === 'minLength' && <Label basic color='red'>Password should be at least 6 characters</Label>}
            </Form.Field>

            <Button color='teal' fluid size='large' onClick={handleSubmit(onSubmit)}>
              Login
            </Button>
          </Segment>
        </Form>
        {
          message &&
            <Message
              error
              header='Error'
              content={message}
            />
        }
        <Message>
          New to us? <a href='/signup'> Sign Up</a>
        </Message>
      </Grid.Column>
    </Grid>
  )
}

export default Login;