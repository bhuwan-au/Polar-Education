import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactInfo() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-8 text-foreground">
        Contact Information
      </h2>

      <div className="space-y-8">
        {/* Address */}
        <div className="flex gap-4">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
              <MapPin className="text-primary" size={24} />
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-1">Address</h3>
            <p className="text-muted-foreground">
              2nd Floor, Star Mall
              <br />
              Putalisadak, Kathmandu
              <br />
              Nepal
            </p>
          </div>
        </div>

        {/* Phone */}
        <div className="flex gap-4">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
              <Phone className="text-primary" size={24} />
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-1">Phone</h3>
            <p className="text-muted-foreground">
              <a href="tel:+977-9762120099" className="hover:text-primary">
                +977 9762120099
              </a>
              <br />
              <a href="tel:+977-9851249082" className="hover:text-primary">
                +977 9851249082
              </a>
              <br />
              <a href="tel:+977-01-4540500" className="hover:text-primary">
                +977-01-4540500
              </a>
            </p>
          </div>
        </div>

        {/* Email */}
        <div className="flex gap-4">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
              <Mail className="text-primary" size={24} />
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-1">Email</h3>
            <p className="text-muted-foreground">
              <a
                href="mailto:info@polareducation.com.np"
                className="hover:text-primary"
              >
                info@polareducation.com.np
              </a>
              <br />
              <a
                href="mailto:doc.polareducation@gmail.com"
                className="hover:text-primary"
              >
                doc.polareducation@gmail.com
              </a>
            </p>
          </div>
        </div>

        {/* Hours */}
        <div className="flex gap-4">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
              <Clock className="text-primary" size={24} />
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-1">Office Hours</h3>
            <p className="text-muted-foreground">
              Sunday - Friday: 10:00 AM - 5:00 PM
              <br />
              Saturday: Closed
            </p>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-12 w-full h-64 sm:h-96 bg-secondary rounded-lg border border-border overflow-hidden">
          {/* If you want a centered placeholder while map is loading, keep this inner block and use state to toggle it */}
          <iframe
            title="Star Mall — Google Maps"
            src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d883.0844348128038!2d85.32252016952177!3d27.706856585842797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1907e99e0391%3A0xcce47de157f588d3!2sStar%20Mall!5e0!3m2!1sen!2snp!4v1762868201465!5m2!1sen!2snp`}
            className="w-full h-full border-0"
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

          {/* Accessible off-screen text for screen readers (optional) */}
          <span className="sr-only">
            Interactive map showing Star Mall location in Kathmandu.
          </span>
        </div>
      </div>
    </div>
  );
}
