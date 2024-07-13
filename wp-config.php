<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'TengJie' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'V(|GC$hcN8IEvy;+WXtHv,)N|/A-#5iiR]6QiEX<D3/Bo0GU<=61$Dq%c?=E^PdD' );
define( 'SECURE_AUTH_KEY',  '17QyL5B5t|a1^8w;|]FOm9fn#j0>VlK|RR4zRSoe,z/EONZD.br@_5TA*]L(-js]' );
define( 'LOGGED_IN_KEY',    ':N@oM%-b.0;y D-pi:VUz[:6az%LD]ny$|8R~dY]5g#V4&em;$S+<#JR0RCgS=%~' );
define( 'NONCE_KEY',        '1#WN;W>#6*&.X9j#~i)Q-b=tzMgg1Ri[hWLscXjIJ),MKe7/2!GQl2,9mf3tI /;' );
define( 'AUTH_SALT',        'b50*!W,|-5Irl075gY/ {agTNE0Z@6b{GRu(]-ITl-A9^So;.pi6 ]:OcVni|^lI' );
define( 'SECURE_AUTH_SALT', 'Z5v&akE[H~(VR!g2L2&QT(uOhZK<F`dD[Ydm0Bmg9q~/[?Y+,}j)o!+PniK~gbRj' );
define( 'LOGGED_IN_SALT',   'eQeDQmuT[DHD~cf5w{gS$.-tcIh@9|= ajn.K[0;wf?=TY;#9rK/Dnjb)Sl}7ijl' );
define( 'NONCE_SALT',       ',Sl-/L.7sib/40tWB+D>e||9>>Q0IjarSzb1Y#*,VHdD8Ik%)|]h!8o`cvFU,,Dd' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
