import React from 'react';
import './PaymentForm.scss';

const PaymentForm = () => {
  return (
    <>
    <form id="form-box">
      <div className="form-row">
        <div className="form-group col-md-6">
          <div className="form-check">
            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked="" />
            <label className="font-weight-bold ml-3" for="exampleRadios1" id="credit-card-txt">Credit Card</label>
            </div>
            </div>
            <div className="form-group col-md-6 d-flex justify-content-end">
              <img className="p-1" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAApCAYAAABk+TodAAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAOqADAAQAAAABAAAAKQAAAACnI2ScAAAEsklEQVRoBd2ZXWgUVxTH/zPZzce6jUZXYupH000LEuxH0lJsEgUjWCi1BaVQpC8Fq7RQCr5IH/pQ+tS+lD60TxZ8kULBYj9EyEu1VSuFxkhrhEJiQrSxNZq4TbI7O7Nze86Mdxx3d3ZnbyS4c2Bz754598z88r9zv1Z76cCvvTFNfKbr2I6ImRCYFJb98ckjA19pLx84e6mhQX86YoweDsEibzWk9ShDMq2mAU0x6/GYhx7RCitq5oWINKhVEMibNjSBaII6Klo2GFRa5BQt2K6KDOu3SIFyN/WrGDnQIBUjBZrnd9Eq6qd+wrv1uu269Co6I6rNlRBWl6AmKWiSkrXYAwPtn/sdvfNX0PvfqHf/m/E2XEx24+yqHkw1P+r5ZSURy+LVzgvYum4U6dZp6cZ4pgMXbnTj+4mtWLRaPD+PpAYNOGFV9BpSRdv9zvlw2vtb+eobc3/jvWvHsNac9XlLq0Nt/TiRGkQ25j747s5z2PfkT1gRz5UG3/UsmM049tcgfpzsc0ZTHlVVjBYMO5YEyirunz4e+t6TTR34ZNN+HHzuFAbXD4dsJzA08RQ+HX49ZHxpGIPqpe5wHlayFkjO+pgxjY9ufREeUhQAK4ddG37DnvTP4R4sIEoZdN8/JwNSVnZvfmsuOMB7iahi54GCQbGu890tP6C95XZw2ypXlEB5wNm8eLVK6vKXM9/YmB8ipUqMgKiPQdB7SCrCtkoi9nb9UuIL61AC7cncG1nD3ojj4hvps0FDQ1KHMFyl7rWnjSPDFXhwKr7mRvXR6KxqStNLyqo8wgY9jN4KxAjWM8nDKnJXBStNwAG2LqHedZVAA56jqtu4TPPgZZcu8aKGlj5qYpvux2kdDCmTd7Vex1hmvfwaulxW0EQfwRGgYzz7czdlNWswFUhOrwQ6E2ujpldreDw3dJHWJvyhVThWvmki1l5dQf9NeAGhakqD0cXWbrX7kYqte/JY+UYQpNutg5Kfu7El6FJVvxLo8CPdmImvqpr8vgBSUWSzMCcL4HVAeaus8PGxgfLNQniVQDnv1+2vhEhPIaSiMAyIPI+qwL9/JBDfVBnICSz68+34gNIgJNMog7KqJ1I7ZZ7yZYHUy9GAQyXbot6MD1LvY+xOR/n4AC/Hf/nnawFXw7mVQTn9d2t34kjHXmQJoNhYQVaSFWWboG3a4fQh3Gxag4NnDoEVCmNDU8878WFiK8UsafciE6eM29g1ex4986PgutNNbXfaYMBTq7fhTNsLMtwrn1kz5izWn02N37dd49F1ZCZN/4ztuHSry4tXrSx5m1Z8Yz6/acwtoJN2NmyjySeKQwK/80IgSXvTeYJUnSuDkjOo0jxanJCPbYw8vY88RcYSNQHKXA8aTuaV5ZJBVc5v5M2Xs1QGZfVUz2+WE1DeSwlU/ngjk9RDWRMoq8gHVHwyXm8WGpThjHxtO42H6Z+h0/HFVKUHkirWM6QFfU5fvaLxMIFmysGyijmaNoJ+oSrX5mHzkVCfnz7aP6IJIZL0cNrbH45s8z/knVnDnF0waftfv2bBGjl9dIdz7MigTYTS6MPhFXhO07T6fSF9MLLq7JcIlgclXuALAqxrFSVYcfk/7g3iNt/yXPgAAAAASUVORK5CYII=" alt="" />
              <img className="p-1" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAAnCAYAAABe81ttAAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAOqADAAQAAAABAAAAJwAAAAAYE9r9AAAEl0lEQVRoBe2ZX2wURRzHv3e9Qnst4SpCjWmPgyA9orRCjUaFChHLCxZN5AW1oSF9IKYPJjxoMDwQeCNBxRcTorH1SROV8qACCbEtCcEALaL2XugfqwgIXA1/unf7x99vtjO3R3p1d5vg3cZf0pvfzM7Mzmd+f2Z3G4q2f7YmGg6/Hw6hBQETw8KYYer70t0dn4QW7+geCoVCjQFjzMPRdGt5JOiQumnCMJCI5KEHqGIRi5Y1kDVMWFbICiSoblqYIkjLYlxbAgXqtKIElGVgQDkWpzJkRUl2X1nyoCa5p6ab0CkWZ5OSBs1SLGoZvaAVneAlCcpW5GRjEKhbCWma9rvbzsXQbzqTuiekRZeVlbWzRR8tBoB/WwM92IjjgkuvYhhGZdjroP+qv/NM9LOGkgH1A+cc4z4Z/XEcGP0SyN7OjX+sgxy/VdV/+PUqDhy9JOrrG5Zg+3MJ7Pr0rKi/+lQ9dm1aKfTR67fx+ekR9A1fU2PfeH4Z2tcvV/WhsVs4dmFC1d97ZbXS/SjuQRmI/whWv3QIkakrQPoXYGsOtGfgMhiWZc/WJ3Bu5Kaqv/Z0XLR3919G55EzQnf+xBdF80C3fdiHsb/uqC4vr6lD09IaVfequAeVMye2YefRKryT+BqrsicJ9mcg9jjYSj0DI6JXS3IJXlhViz1fDMpRaIrXIH0noyAb62M4+HozYtF5AmhhtFz17T03kQfJF4bGb80J1FeMvrg2iSe/2ogf9Q22VWkhEpIX9eY62wUv0uJY6KUeqwnMaSHOnksfrhKLb2uuExsjOtPP4ePDUlVl37DtKarBo+ILlC3Gsu7bl3Bh1IZht2XhxctYYyuwrKhdgOj8iIBiS7LwtYbdvcLC7A1S2PWdsSvb+1PXpeqr9AWaWFwNueDdpxbB6WoyafyZvoerk1NiUc7YOvHuJrL4MrVYjtln9n4n3Job93/zk7rmVHgznBvivOZG9wXKE7c114v5B0Y1fHQiJfSFleVoW1sndGlNrjTFHxJt/BOrmocjnc8idbBNbVb6bga95ycEyEzWlINnuyb7FCr9g04D8cQy03ZtTgoQbrs4nuZCSGPcdle2HickFvYKdnMprBeypuzDR45f8Z51p+/E7siLkwmGrdnV2qDWMTR+U+mccXkz+FjpVK05hV2Z55IJjcNCegz34vjn+/SncudubrQ7zTcoT9/VmiSX+03cqSVZq6zJDQsqykUmraYk9EisUrxtcBJjq0zeywowhuMMzcnr8PcpyCTHcc7HkxR7E+xkJ9u8lvz24ulNwOsNiqE/PSdv8R2jxQDgZQ3/g3rZLe7r5z3R6z3m0j9yoycX9L4msugDsaEBlu5r+IMYFJlfrc0p68LM2pCuPk89CKSZ72Fqk7pPULKiTo93ljHzzEXY6h1UWNF+hi1CnoJLcg8qYrG0rOikdgFKzxMqFp1DS0ufHZRi0M6opROLhba/AGgwrOiEDtNX4XFnA/kpZdS708dG/pVSrdH/n9JhGJm36Zz4W0DQwW9l6csbJZ6giAXrg7q3MKi+71/5OLIRph6oN5mKCgzWdEB8AfgHrMXHMB6HO0sAAAAASUVORK5CYII=" alt="" />
              <img className="p-1" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAAnCAYAAABe81ttAAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAOqADAAQAAAABAAAAJwAAAAAYE9r9AAADj0lEQVRoBd2aT0gVQRzHf/sySdRMCZ+pFZqIQSk+C4JA+3PokB2iU4cKD0YQBHro0qFDBRFEdI4gCKtLIESHDhEEnYJSK1BJMSMDKZ+U5fP5dqf5vvd2G327s3+eT3b3B+7Ozm9mfvOZ3/z5Oap0PByOKZHIHYVYJ4VMNFK+aKp27f3ZtvvKvoGRYYWoNWSMK3CWVNYYCTskiIuKqKFoBXoIP1SN6G9K00ILyrjTkiqjlIYU92r6GbIHvLjEHxnEDFyoQAHGNx5Ss14U/Rca0FTWiyKcmA48qMyLoQFd5lMUG44TCaRHsQQBqDJnkBiIwIG68aLo6cCAYoYm+ZFhsqGKPJbpQIBimsKT+Ygr0L7YNjrdstWwN/MnSZdfT9N4fJFude6kQ/WbDd14PEEXXk7SQlJN53XVV9DVA3VUVrzBKAOd+G0osgnogVfO63xbSNKlV1M0OreY1l4/uJ1ONlWl08g79Ww8W8v8FTHPzs3tiJatgESJ2tJi6ufwEBES382Vmwwdvvs6anKgZJCoAz0gIXVlxfTg2C5qqSohERI65OFHJo492run2rSdWLSUMAhm0t1YSfc+zHLokvSgmJVxkwfopyea3VQxyjoCBQiArMRqEFD+/N5qquGeL6QMfp4zprSVHUegMhA0LBuE49yrhRRAXnnz1daE7Rq186athQIW+M03q5tvZxxZsAW186YjKwUqhDWLDUrfsGRmpKB+9qYOhd0WsHYiXaPdDVty6j+fjNMMP9Mgva3RHH2hM2C7lh81oujHi37Gijo9LQVdvZHgAL/97rsRBDTz0ewSggS9UbzNggGzTop17NJjPDA492KCju6ooBs8YBAF61UmUtAnoz/SZ6DewOOxnwYk8nBGlm/8H+no5dK6j7PUVVdOTTxwwC8ZGO3BiThdbIsaawqdk60vvfMog8gIGw/ysNPifWZ3JkpD29DLRNk/MJJfEGnRer5BuEWznrI1xg5LPeqpVV5pLYJwr7at6q0pqNntm5Xh9c5fE1DMfXhRv0Ndbwgn9vIG9bMXxQHwDAovWt2higb8kvYEaneH6hc4sR+uQIPmRU+gQfSiK1Avd6iiAb+kpVPX6x2qX+DEfkS4x6bFDKQRviVSzq/7V9f32zePxucjCmP9POj+pXcOB3+CL0g31/16XT++GWN3P/W0D/F/YchI7NHwkaVlxvjfFrG5hkISRENTPe3zgPkHnIFxEte3oEsAAAAASUVORK5CYII=" alt="" />
              </div>
              </div>
              <div className="form-group" id="border-box-margin">
                <label for="card-number" className="text-uppercase">Card Number</label>
                <input type="text" className="form-control" id="card-number" placeholder="0000 0000 0000 0000" />
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label for="name-on-card" className="text-uppercase">Name on card</label>
                    <input type="text" className="form-control" id="name-on-card" />
                    </div>
                    <div className="form-group col-md-3">
                      <label for="expiry-date" className="text-uppercase">Expiry date</label>
                      <input type="text" className="form-control" id="expiry-date" placeholder=" MM / YY " />
                      </div>
                      <div className="form-group col-md-3">
                        <label for="cvv-code" className="text-uppercase">Cvv code</label>
                        <input type="text" className="form-control" id="cvv-code" />
                        </div>
                        </div>
                        </form>
                        <form id="form-box">
                          <div className="form-row">
                            <div className="form-group col-md-6">
                              <div className="form-check">
                                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked="" />
                                <label className="font-weight-bold ml-3" for="exampleRadios1" id="credit-card-txt">PayPal</label>
                                <p className="text-body">You will be redirected to PayPal website to complete your purchase securely</p>
                                </div>
                                </div>
                                <div className="form-group col-md-6 d-flex justify-content-end">
                                  <img className="p-1" src="data:image/png;base64,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" alt="" width="max-content" height="max-content" />
                                  </div>
                                  </div>
                                  </form>

                                  </>
  );
};

export default PaymentForm;