import React from 'react';

import * as colors from 'src/utils/colors';

import styles from './social-icon.module.css';

const TYPES = { email, github, linkedin, telegram, vk };

interface ISocialIconProps {
    type: keyof typeof TYPES;
    href: string;
}

interface IIconProps {
    color: string;
}

function email({ color }: IIconProps) {
    return (
        <svg
            viewBox="0 0 44 44"
            fill={color}
            xmlns="http://www.w3.org/2000/svg"
        >
            <g fill="none" fillRule="evenodd">
                <path d="M0 0h44v44H0z" />
                <circle stroke={color} strokeWidth="2" cx="22" cy="22" r="21" />
                <path
                    fill={color}
                    d="M13.1115479 18.9319176c-.5073561-.3181477-.9862328-.755688-1.4363287-1.3124814C11.2251233 17.0626427 11 16.5454609 11 16.0681695c0-.5908258.1698219-1.0833202.5094658-1.4773436C11.8491096 14.196942 12.3340137 14 12.9641781 14h18.0714931c.5317672 0 .9922603.177973 1.3810274.5340586C32.8054658 14.8901442 33 15.3182 33 15.8182262c0 .5984971-.200411 1.1704936-.6016849 1.7157104-.4011233.5454957-.9001918 1.0114894-1.4976576 1.3977021-3.0772876 1.9773698-4.9926438 3.2083965-5.7454657 3.6932196-.0818219.0531409-.255863.1684886-.5218219.3466012-.2659589.1781125-.4868631.3221925-.6628631.4319612-.176.1097686-.3887671.2327876-.6383013.3691964-.2495343.1361299-.4850548.2386457-.7059589.3065711-.2210548.0683439-.425685.1022369-.6138904.1022369h-.0247124c-.1882054 0-.3928356-.033893-.6138904-.1022369-.2209041-.0679254-.4562739-.1703018-.7059589-.3065711-.2496849-.1362693-.462452-.2594278-.638452-.3691964-.1758493-.1097687-.3969041-.2538487-.662863-.4319612-.265959-.1779731-.4398494-.2934603-.5216713-.3466012-.7448356-.4846836-1.8169589-1.1759331-3.2165205-2.0736091-1.3995617-.897676-2.2384247-1.4375926-2.5167398-1.6193316zm18.6606713 1.2158237C32.2388904 19.8523284 32.648 19.522604 33 19.1591262v9.0225081c0 .5001657-.1921233.9279426-.5769726 1.2841676C32.0383288 29.822027 31.5758767 30 31.0358219 30H12.9643288c-.5402055 0-1.0026576-.177973-1.3873562-.5341981C11.192274 29.1097163 11 28.6818 11 28.1816343v-9.0225081c.360137.3711491.7734658.7008735 1.2399863.9886151 2.9627671 1.8635564 4.9965616 3.1704587 6.1015342 3.9204282.4665206.3181478.8450411.5664174 1.1355617.744251.2905205.1781125.6773288.3598514 1.1601233.5454957.4827945.1856443.9330411.2783967 1.3504383.2783967h.024863c.4173973 0 .8674932-.0927524 1.3502877-.2783967.4829452-.1856443.8696028-.3673832 1.1601233-.5454957.2906712-.1778336.6691918-.4261032 1.1357123-.744251 1.3911233-.9318479 3.4292877-2.2387502 6.1135891-3.9204282z"
                />
            </g>
        </svg>
    );
}

function github({ color }: IIconProps) {
    return (
        <svg viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fillRule="evenodd">
                <path d="M0 0h44v44H0z" />
                <circle stroke={color} strokeWidth="2" cx="22" cy="22" r="21" />
                <path
                    fill={color}
                    d="M10 22.3044338c0 5.4354025 3.4380429 10.047488 8.2065134 11.6744831.6003868.1133005.819178-.2666338.819178-.5929392 0-.2923153-.0103134-1.06578-.0162068-2.0922825-3.3378556.7432512-4.042113-1.6496553-4.042113-1.6496553-.5458731-1.4215435-1.3326376-1.7999672-1.3326376-1.7999672-1.0895362-.7636453.0825072-.7477832.0825072-.7477832 1.2044568.0868637 1.8379938 1.2682102 1.8379938 1.2682102 1.0711194 1.8800329 2.808926 1.3369458 3.4925565 1.0219705.1090273-.7953695.4191657-1.3369459.7617177-1.6451232-2.6645385-.3104434-5.4660978-1.3656487-5.4660978-6.08046 0-1.3437439.467786-2.4420033 1.235397-3.3023318-.123024-.3111987-.534823-1.5620361.1178674-3.2555009 0 0 1.0077657-.3315928 3.2995488 1.2606569.9576721-.2726766 1.9838546-.4093925 3.0041437-.4139245 1.0195525.004532 2.045735.1412479 3.0048805.4139245 2.2903097-1.5922497 3.2966021-1.2606569 3.2966021-1.2606569.6541637 1.6934648.2423647 2.9443022.1193407 3.2555009.7690843.8603285 1.233187 1.9585879 1.233187 3.3023318 0 4.7261414-2.8052427 5.7662399-5.4786212 6.0713959.4309524.3799343.8140213 1.130739.8140213 2.2780953 0 1.6451232-.0139968 2.9722497-.0139968 3.3755995 0 .3293267.2158446.7115271.8250714.5914285C30.5649038 32.3473898 34 27.7390809 34 22.3044338 34 15.5086701 28.6267227 10 21.998895 10 15.3732773 10 10 15.5086701 10 22.3044338z"
                />
            </g>
        </svg>
    );
}

function linkedin({ color }: IIconProps) {
    return (
        <svg viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg">
            <path fill="none" d="M-1-1h582v402H-1z" />
            <g>
                <g fillRule="evenodd" fill="none">
                    <circle
                        r="21"
                        cy="22"
                        cx="22"
                        strokeWidth="2"
                        stroke={color}
                    />
                    <path
                        stroke="null"
                        fill={color}
                        d="M17.064926 30.776605V18.58418h-3.768377v12.192425h3.768377zm0-16.514108c-.022448-1.091093-.749623-1.921838-1.930946-1.921838-1.181623 0-1.953693.830745-1.953693 1.921838 0 1.0674.749623 1.922178 1.908498 1.922178h.022448c1.20407 0 1.953693-.854778 1.953693-1.922178zm6.147887 16.514108v-6.946656c0-.371773.026872-.743546.136198-1.008572.298887-.74318.979129-1.512499 2.12132-1.512499 1.496301 0 2.434699.849194 2.434699 2.521071v6.946656h3.793803v-7.132539c0-3.820808-2.039599-5.598699-4.760179-5.598699-2.230646 0-3.209775 1.2471-3.753446 2.095921l.027238-1.630686h-3.787247c.054476 1.167224 0 12.266004 0 12.266004h3.787613z"
                    />
                </g>
            </g>
        </svg>
    );
}

function telegram({ color }: IIconProps) {
    return (
        <svg viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fillRule="evenodd">
                <path d="M0 0h44v44H0z" />
                <circle stroke={color} strokeWidth="2" cx="22" cy="22" r="21" />
                <path
                    fill={color}
                    d="M30.9886676 11.9209704l-3.1427971 18.8567829c-.0409221.2373479-.1718706.4214943-.3928497.5524448-.1145817.0654753-.2414381.0982125-.3805731.0982125-.0900285 0-.1882399-.0204608-.2946372-.0613828l-5.5612778-2.271162-2.9709254 3.6215827c-.1473194.1882414-.3478344.2823606-.601551.2823606-.1063973 0-.1964245-.0163685-.2700842-.0491062-.1555037-.0572908-.2803141-.1534562-.3744348-.2884989-.0941207-.1350428-.1411803-.284406-.1411803-.4480942v-4.2845164l10.6069404-13.0008679-13.1236335 11.35581-4.84923776-1.9888013c-.30282311-.1145817-.46650883-.3396496-.49106205-.6752103-.01636882-.3273764.11457975-.5688128.39284964-.7243166L29.8223953 11.110718c.1227661-.0736597.2537147-.110489.3928496-.110489.1636882 0 .3110053.0450136.4419558.1350421.2700855.1964258.3805734.4583229.3314669.7856993z"
                />
            </g>
        </svg>
    );
}

function vk({ color }: IIconProps) {
    return (
        <svg viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fillRule="evenodd">
                <path d="M0 0h44v44H0z" />
                <circle stroke={color} strokeWidth="2" cx="22" cy="22" r="21" />
                <path
                    fill={color}
                    d="M22.7260375 29.931282s.4511951-.0492101.682295-.2928605c.211536-.2232462.2041994-.6445333.2041994-.6445333s-.0281232-1.9672066.9023902-2.2576667c.9170632-.285659 2.0945724 1.9023933 3.3442238 2.7437672.9439638.6361315 1.6604958.4969028 1.6604958.4969028l3.3393328-.0456095s1.7460884-.1056218.918286-1.4535004c-.0684741-.1104229-.4829866-.9974062-2.4821844-2.8193829-2.0945724-1.9071942-1.8133397-1.5987305.7079728-4.8982125 1.5357751-2.0092154 2.1495961-3.235869 1.9576242-3.7603774-.1821899-.5017037-1.3120117-.3684762-1.3120117-.3684762l-3.7587364.0228047s-.2787872-.0372077-.4854321.0840174c-.2017539.1188246-.3325883.3960819-.3325883.3960819s-.5942569 1.5543213-1.3878223 2.8769947c-1.673946 2.7893767-2.3427908 2.9370072-2.616687 2.7641714-.6370532-.4044836-.4780956-1.6227354-.4780956-2.4881143 0-2.704159.4181808-3.831192-.8131294-4.1228523-.4083988-.0972201-.7091955-.1608332-1.7546476-.1716355-1.3413578-.0132027-2.4760706.004801-3.1192376.3132648-.4279629.2052424-.7581056.6637372-.5563517.6901426.2482184.0324067.8106839.1488308 1.1090351.5473132.3851665.5149064.3717163 1.6695451.3717163 1.6695451s.2213179 3.183058-.5172237 3.5779397c-.5062188.271256-1.2007414-.2820583-2.6937203-2.8133816-.7642193-1.296268-1.3413577-2.7293642-1.3413577-2.7293642s-.1112704-.2676554-.3105788-.4116852c-.2408819-.1740359-.5771384-.2280471-.5771384-.2280471l-3.57165551.0228047s-.53678766.014403-.73365056.2436504c-.17485339.2028419-.01345026.624129-.01345026.624129s2.79643143 6.4225277 5.96335633 9.6595969c2.9040335 2.9670133 6.20057 2.7725731 6.20057 2.7725731h1.4942016z"
                />
            </g>
        </svg>
    );
}

export function SocialIcon(props: ISocialIconProps) {
    const { type, href } = props;
    const color = colors.ACCENT;

    return (
        <a className={styles.icon} href={href}>
            {TYPES[type]({ color })}
        </a>
    );
}
