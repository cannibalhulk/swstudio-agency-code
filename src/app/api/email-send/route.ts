import { NextRequest, NextResponse } from 'next/server';
import { TContactFormBody } from '@/types/email-api';
// import emailjs from '@emailjs/browser';

export const POST = async(request:NextRequest) => {
  const { fullname, email, phone, message } = await request.json() as TContactFormBody;
  
  if (!fullname || !email || !phone || !message) {
    return NextResponse.json({ success: false, error: 'All fields are required.' }, { status: 400 });
  }

    const serviceId = 'service_2et9ha5';
    const templateId = 'template_pk4it1v';    
    const templateParams = {
      from_name: fullname,
      from_email: email,
      from_phone: phone,
      to_name: 'Shukur Web Studio',
      message: message,
    };
    
   try {
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: serviceId,
          template_id: templateId,
          user_id: process.env.EMAILJS_PUBLIC_API!,
          template_params: templateParams,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send email.');
      }

      const result = await response.json();
      return NextResponse.json({ success: true, result });
    } catch (error) {
      console.error('Error sending email:', error);
      return NextResponse.json({ success: false, error: error }, { status: 500 });
    }
}
